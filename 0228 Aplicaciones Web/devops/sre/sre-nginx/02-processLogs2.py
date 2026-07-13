import apache_log_parser

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
    for line in f:
        data = line_parser(line)
        #print(data)
        print(data['remote_host'], data['request_url'], data['time_received'], data['request_header_user_agent'])
