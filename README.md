**# Docker Mendix App**



imagem para criar mendix app via docker



### Steps



**1.Criando imagem**



``` 
docker build -t create-app-mendix.
```



**2.Criando imagem**



```
docker run --rm --env-file .env -e APPNAME=MyNewApp3 create-app-mendix
```
or 

```

docker run --rm \

-e MDX_USER=user@user.com \

-e MDX_KEY=74839274923 \ 

-e APPNAME=MeuNovoAppViaDocker \

create-app-mendix

```
