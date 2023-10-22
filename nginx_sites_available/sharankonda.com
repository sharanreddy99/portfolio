server {
       listen 80;
       server_name sharankonda.com;
       return 301 https://$host$request_uri;
}

server {
      listen 443 ssl;
      root /var/www/html/sharankonda.com;
      server_name sharankonda.com;

      ssl_certificate /etc/letsencrypt/live/sharankonda.com/fullchain.pem;
      ssl_certificate_key /etc/letsencrypt/live/sharankonda.com/privkey.pem;
      include /etc/letsencrypt/options-ssl-nginx.conf;
      ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem;

      if ($host = www.sharankonda.com) {
            return 301 https://sharankonda.com$request_uri;
      }

      location / {
            try_files $uri $uri/ =404;
      }
    }
