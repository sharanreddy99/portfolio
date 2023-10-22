server {
      listen 80;
      server_name project.sharankonda.com;
      return 301 https://$host$request_uri;
}

upstream projects {
      server project.sharankonda.com:9453;
}

server {
      listen 443 ssl;
      root /var/www/html/project.sharankonda.com;
      server_name project.sharankonda.com;

      ssl_certificate /etc/letsencrypt/live/project.sharankonda.com/fullchain.pem;
      ssl_certificate_key /etc/letsencrypt/live/project.sharankonda.com/privkey.pem;
      include /etc/letsencrypt/options-ssl-nginx.conf;
      ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem;

      location / {
            proxy_pass http://projects$request_uri;
      }
}

