import pandas as pd

# 读取 CSV 文件
df = pd.read_csv('douban_movie_top100.csv')

# 统计每个年份出现的数量
year_counts = df['年份'].value_counts().reset_index()
year_counts.columns = ['年份', '数量']

# 显示统计结果
print(year_counts)

# 将统计结果导出为 CSV 文件
year_counts.to_csv('year_counts.csv', index=False)
