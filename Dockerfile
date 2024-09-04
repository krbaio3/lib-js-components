# Usa la imagen oficial de nginx como base
FROM nginx:alpine

# Elimina el archivo de configuración de Nginx por defecto
RUN rm /etc/nginx/conf.d/default.conf

# Copia tu configuración personalizada de Nginx al contenedor
COPY nginx.conf /etc/nginx/conf.d/

# Copia los archivos estáticos que quieres servir a la carpeta correspondiente
COPY ./static-files /usr/share/nginx/html

# Expone el puerto 80
EXPOSE 80

# Inicia el servidor Nginx
CMD ["nginx", "-g", "daemon off;"]
