# Define o nome do arquivo Docker Compose
COMPOSE_FILE=docker-compose.yml
COMPOSE_DEV_FILE=docker-compose.dev.yml

# Comando para subir os containers
up:
	docker-compose -f $(COMPOSE_FILE) up

# Comando para derrubar os containers
down:
	docker-compose -f $(COMPOSE_FILE) down

# Comando para limpar containers e volumes
clean:
	docker-compose -f $(COMPOSE_FILE) down --volumes --remove-orphans

# Comando para remover o banco de dados PostgreSQL
drop:
	docker exec -it postgres psql -U postgres -d postgres -c "DROP DATABASE IF EXISTS my_database;"

# Alvo para executar comandos dentro do container do Postgres
postgres:
	docker exec -it postgres bash

# Alvo para executar comandos dentro do container da aplicação
app:
	docker exec -it app bash

db-dev:
	sudo docker compose -f $(COMPOSE_DEV_FILE) up
db-dev-stop:
	sudo docker compose -f $(COMPOSE_DEV_FILE) down
db-dev-clean:
	docker-compose -f $(COMPOSE_DEV_FILE) down --volumes --remove-orphans

