.PHONY: all

SHELL=/bin/bash -e

##################
# Variables
##################
include .env

ENV ?= local

$(info ENV="$(ENV)")

help: ## Справка
	@awk 'BEGIN {FS = ":.*?## "} /^[a-zA-Z_-]+:.*?## / {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}' $(MAKEFILE_LIST)

info: ## Шпаргалка по установки из README.md
	@sed '/git/,/```/!d;/```/q' README.md | grep -v '```'

##################
# Docker compose
##################
rebuild: ## Сборка контейнеров без запуска проекта
	docker compose -f docker/docker-compose.$(ENV).yml build

up: ## Запуск проекта
	docker compose -f docker/docker-compose.$(ENV).yml up -d

down: ## Остановка всех контейнеров проекта
	docker compose -f docker/docker-compose.$(ENV).yml down

bash-nuxt: ## Зайти в bash контейнера с nuxt
	docker compose -f docker/docker-compose.$(ENV).yml exec nuxt /bin/bash