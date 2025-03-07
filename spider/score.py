import pandas as pd

# 读取 CSV 文件
df = pd.read_csv('douban_movie_top100.csv')

# 统计每个评分对应的数量
rating_counts = df['评分'].value_counts().reset_index()
rating_counts.columns = ['评分', '数量']

# 显示统计结果
print(rating_counts)

# 将统计结果导出为 CSV 文件
rating_counts.to_csv('rating_counts.csv', index=False)
