server {
      listen 80;
      server_name deployer.sharankonda.com;
            return 301 https://$host$request_uri;
      }

upstream ondemanddeployer {
      server deployer.sharankonda.com:9452;
}

server {
      listen 443 ssl;
      root /var/www/html/deployer.sharankonda.com;
      server_name deployer.sharankonda.com;

      ssl_certificate /etc/letsencrypt/live/deployer.sharankonda.com/fullchain.pem;
      ssl_certificate_key /etc/letsencrypt/live/deployer.sharankonda.com/privkey.pem;
      include /etc/letsencrypt/options-ssl-nginx.conf;
      ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem;

      location / {
            proxy_pass https://ondemanddeployer$request_uri;
      }
}

