import express, { Request, Response } from 'express';

const app = express();
const PORT :     number = 3000;

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
    res.json({
        message: "Bienvenido a mi API con Typescript!",
        entregable: "Paso 1 completado"
    })
});

app.get('/usuario/:id', (req: Request, res: Response) => {
    const  idCapturado = req.params.id;
    res.json({
        usuario_id: idCapturado,
        mensaje: "Parametro dinamico recibido"
    });
});

app.get('/buscar', (req: Request, res: Response) => {
    const nombre = req.query.nombre as string;
    res.json({
        resultado: nombre ? `Buscando a: ${nombre}` : 'No se proporcionó un nombre',
    });
});

app.listen(PORT, () => {
    console.log(`>>> Servidor listo en http://localhost:${PORT}`);
});