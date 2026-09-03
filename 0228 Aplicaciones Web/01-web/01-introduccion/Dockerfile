FROM docker.io/library/ubuntu:latest

ENV DEBIAN_FRONTEND=noninteractive

# Install essential TCP/IP diagnostic utilities
RUN apt-get update && apt-get install -y \
    iputils-ping \
    iproute2 \
    net-tools \
    dnsutils \
    traceroute \
    tcpdump \
    curl \
    netcat-openbsd \
    iptables \
    nano \
    && rm -rf /var/lib/apt/lists/*

CMD ["/bin/bash"]