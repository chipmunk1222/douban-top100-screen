import requests
from bs4 import BeautifulSoup
import csv

# 请求URL
url = 'https://movie.douban.com/top250'
# 请求头部
headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36'
}

# 解析页面函数
def parse_html(html, writer):
    soup = BeautifulSoup(html, 'lxml')
    movie_list = soup.find('ol', class_='grid_view').find_all('li')
    for movie in movie_list:
        title = movie.find('div', class_='hd').find('span', class_='title').get_text()
        rating_num = movie.find('div', class_='star').find('span', class_='rating_num').get_text()
        comment_num = movie.find('div', class_='star').find_all('span')[-1].get_text()
        info = movie.find('div',class_='bd').find('p').get_text().strip().split('\n')[-1]
        movie_year = info.split('/')[0].strip()
        movie_area = info.split('/')[1].strip()
        movie_type = info.split('/')[2].strip()
        writer.writerow([title, rating_num, comment_num,movie_year, movie_area, movie_type])

# 保存数据函数
def save_data():
    with open('./douban_movie_top100.csv', 'w', newline='', encoding='utf-8-sig') as f:
        writer = csv.writer(f)
        writer.writerow(['电影名称', '评分', '评价人数', '年份', '地区', '类型'])

        for i in range(4):  # 确保抓取所有10页的电影数据
            try:
                response = requests.get(url + '?start=' + str(i*25) + '&filter=', headers=headers)
                response.raise_for_status()  # 检查请求是否成功
                parse_html(response.text, writer)
            except requests.exceptions.RequestException as e:
                print(f"Error fetching page {i}: {e}")
    
if __name__ == '__main__':
    save_data()
