import pandas as pd

# 读取 CSV 文件
df = pd.read_csv('douban_movie_top100.csv')

# 将地区列拆分成多个地区
df['地区'] = df['地区'].str.split(' ')

# 展开地区列
df_exploded = df.explode('地区')

region_translation = {
    '中国大陆': 'China',
    '中国香港': 'China',
    '美国': 'United States',
    '日本': 'Japan',
    '意大利': 'Italy',
    '法国': 'France',
    '墨西哥': 'Mexico',
    '英国': 'United Kingdom',
    '加拿大': 'Canada',
    '德国': 'Germany',
    '瑞士': 'Switzerland',
    '黎巴嫩': 'Lebanon',
    '塞浦路斯': 'Cyprus',
    '卡塔尔': 'Qatar',
    '韩国': 'South Korea',
    '印度': 'India',
    '中国台湾': 'Taiwan',
    '新西兰': 'New Zealand',
    '波兰': 'Poland',
    '西班牙': 'Spain',
    '丹麦': 'Denmark',
    '瑞典': 'Sweden'
}

# 翻译地区名称
df_exploded['地区'] = df_exploded['地区'].map(region_translation).fillna(df_exploded['地区'])

# 统计每个地区出现的数量
region_counts = df_exploded['地区'].value_counts().reset_index()
region_counts.columns = ['地区', '数量']

# 显示统计结果
print(region_counts)

# 将统计结果导出为 CSV 文件
region_counts.to_csv('region_counts.csv', index=False)
