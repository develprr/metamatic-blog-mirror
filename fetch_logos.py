import requests
from bs4 import BeautifulSoup
import urllib.parse
import os

domains = {
    "Witted Megacorp": "https://witted.com",
    "Talented Solutions": "https://witted.com/talented", # Talented is now Witted
    "Digia Hub": "https://digiahub.com",
    "Atao": "https://atao.fi",
    "EWork": "https://www.eworkgroup.com",
    "Symbio": "https://www.symbio.com",
    "Expak Systems": "https://www.roima.com", # Expak was acquired by Roima
    "Columbia Road": "https://www.columbiaroad.com"
}

def get_logo(url):
    try:
        headers = {'User-Agent': 'Mozilla/5.0'}
        response = requests.get(url, headers=headers, timeout=10)
        soup = BeautifulSoup(response.text, 'html.parser')
        
        # Try finding logo img
        for img in soup.find_all('img'):
            src = img.get('src', '').lower()
            alt = img.get('alt', '').lower()
            if 'logo' in src or 'logo' in alt:
                return urllib.parse.urljoin(url, img.get('src'))
                
        # Try finding svg with logo class
        for svg in soup.find_all('svg'):
            classes = svg.get('class', [])
            if any('logo' in str(c).lower() for c in classes):
                # SVG is inline, tricky to save, skip for now or we could save the raw text
                pass
                
        # Try finding icon
        icon = soup.find('link', rel=lambda r: r and 'icon' in r.lower())
        if icon:
            return urllib.parse.urljoin(url, icon.get('href'))
            
        return None
    except Exception as e:
        print(f"Error fetching {url}: {e}")
        return None

os.makedirs("/home/flash/workspaces/metamatic-blog/assets/logos", exist_ok=True)

for name, url in domains.items():
    print(f"Fetching logo for {name} ({url})...")
    logo_url = get_logo(url)
    if logo_url:
        print(f"  Found logo: {logo_url}")
        try:
            headers = {'User-Agent': 'Mozilla/5.0'}
            img_data = requests.get(logo_url, headers=headers).content
            ext = logo_url.split('.')[-1].split('?')[0]
            if len(ext) > 4 or not ext.isalnum():
                ext = 'png'
            filename = f"/home/flash/workspaces/metamatic-blog/assets/logos/{name.lower().replace(' ', '_')}.{ext}"
            with open(filename, 'wb') as f:
                f.write(img_data)
            print(f"  Saved to {filename}")
        except Exception as e:
            print(f"  Failed to save: {e}")
    else:
        print("  Logo not found.")
