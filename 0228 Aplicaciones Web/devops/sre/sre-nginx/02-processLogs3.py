import apache_log_parser
import pandas as pd

# Log format specifiers and their meanings:
#
# %h            Remote host (IP address)
# %l            Remote logname (from identd, rarely used)
# %u            Remote user (from auth; often '-')
# %t            Time the request was received
# %r            First line of the request (method, path, protocol)
# %>s           Final status code sent to client
# %b            Size of response in bytes, excluding headers
# %{Referer}i   Contents of the Referer header
# %{User-Agent}i Contents of the User-Agent header


line_parser = apache_log_parser.make_parser('%h %l %u %t \"%r\" %>s %b \"%{Referer}i\" \"%{User-Agent}i\"')


with open('access.log', 'r') as f:
    lines = f.readlines()

records = []
for line in lines:
    parsedLine = line_parser(line)
    records.append(parsedLine)

df = pd.DataFrame((records))

print(df.head())


# Convertir datetime
# df['time_received_datetimeobj'] = pd.to_datetime(df['time_received_datetimeobj'])
