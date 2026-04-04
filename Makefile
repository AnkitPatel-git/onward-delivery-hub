.PHONY: env
env:
	@if [ ! -f .env ]; then \
		cp .env.example .env && echo "Created .env from .env.example"; \
	else \
		echo ".env already exists; left unchanged"; \
	fi
