import pandas as pd

# 读取 CSV 文件
df = pd.read_csv('douban_movie_top100.csv')

# 将类型列拆分成多个类型
df['类型'] = df['类型'].str.split(' ')

# 展开类型列
df_exploded = df.explode('类型')

# 统计每种类型出现的数量
type_counts = df_exploded['类型'].value_counts().reset_index()
type_counts.columns = ['类型', '数量']

# 显示统计结果
print(type_counts)

# 将统计结果导出为 CSV 文件
type_counts.to_csv('type_counts.csv', index=False)
