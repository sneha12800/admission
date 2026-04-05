import urllib.request, re, os
url = 'https://admissions-tat-tekkzy.netlify.app/'
req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
try:
    html = urllib.request.urlopen(req).read().decode('utf-8')
    with open('index.html', 'w', encoding='utf-8') as f:
        f.write(html)
    
    # Simple regex to find linked CSS
    css_links = re.findall(r'href="(.*?\.css.*?)"', html)
    for css in css_links:
        css_url = css if css.startswith('http') else url + css.lstrip('/')
        print(f'Found CSS: {css_url}')
        try:
            css_content = urllib.request.urlopen(urllib.request.Request(css_url, headers={'User-Agent': 'Mozilla/5.0'})).read().decode('utf-8')
            css_name = os.path.basename(css.split('?')[0])
            with open(css_name, 'w', encoding='utf-8') as f:
                f.write(css_content)
        except Exception as e:
            print(f'Error fetching {css}: {e}')
            
    print('Fetched index.html and CSS')
except Exception as e:
    print(f'Error: {e}')
