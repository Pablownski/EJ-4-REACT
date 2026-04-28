import time
from contextlib import asynccontextmanager
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.database import engine, Base
from app.routes import items as items_router


@asynccontextmanager
async def lifespan(app: FastAPI):
    for attempt in range(10):
        try:
            Base.metadata.create_all(bind=engine)
            break
        except Exception:
            if attempt == 9:
                raise
            print(f"DB no disponible, reintentando... ({attempt + 1}/10)")
            time.sleep(3)
    from app.seed import seed
    seed()
    yield


app = FastAPI(title="Fútbol Blog API", version="1.0.0", lifespan=lifespan)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(items_router.router)


@app.get("/")
def root():
    return {"message": "Fútbol Blog API activa"}
