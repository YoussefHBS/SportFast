<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Producto;

class ProductosSeeder extends Seeder
{
    public function run()
    {
        $productos = [
            [
                'nombre' => 'Juego de Snowboard',
                'descripcion' => 'Akasha Wide, Binding Master, Boots',
                'imagen' => 'img/hombre/snowboarding.svg',
                'precio' => 544.90,
                'cantidad' => 10,
                'categoria_id' => 1
            ],
            [
                'nombre' => 'Conjunto De Ropa Para Hombres',
                'descripcion' => 'Camiseta con 4 colores, Pantalón Blanco y Negro, Gorra Blanca',
                'imagen' => 'img/hombre/tenista.svg',
                'precio' => 99.99,
                'cantidad' => 10,
                'categoria_id' => 1
            ],
            [
                'nombre' => 'Conjunto De Ropa Para Mujer',
                'descripcion' => 'Camiseta de mangas largas, Short corto, Color negro',
                'imagen' => 'img/mujer/mujer3.svg',
                'precio' => 26.99,
                'cantidad' => 10,
                'categoria_id' => 2
            ],
            [
                'nombre' => 'Conjunto Mujer Negro',
                'descripcion' => 'Sujetador deportivo negro, Leggins negro',
                'imagen' => 'img/mujer/mujer4.svg',
                'precio' => 17.99,
                'cantidad' => 10,
                'categoria_id' => 2
            ],
            [
                'nombre' => 'Conjunto Mujer Negro',
                'descripcion' => 'Sujetador deportivo negro, pantalon corto negro',
                'imagen' => 'img/mujer/mujer2.svg',
                'precio' => 17.99,
                'cantidad' => 10,
                'categoria_id' => 2
            ],
            [
                'nombre' => 'Conjunto Mujer ligero',
                'descripcion' => 'Sujetador deportivo negro, pantalon corto rojo',
                'imagen' => 'img/mujer/mujer6.svg',
                'precio' => 17.99,
                'cantidad' => 10,
                'categoria_id' => 2
            ],
            [
                'nombre' => 'Conjunto de Ciclismo Infantil',
                'descripcion' => 'Jersey manga corta, Pantalón corto con pechera',
                'imagen' => 'img/nino/nino3.svg',
                'precio' => 8.99,
                'cantidad' => 10,
                'categoria_id' => 3
            ],
            [
                'nombre' => 'Juego de Snowboard Infantil',
                'descripcion' => 'Akasha Wide, Binding Master, Boots',
                'imagen' => 'img/nino/nino1.svg',
                'precio' => 95.90,
                'cantidad' => 10,
                'categoria_id' => 3
            ],
            [
                'nombre' => 'Conjunto Fútbol Infantil',
                'descripcion' => 'Camiseta azul, Short negro, Medias azules',
                'imagen' => 'img/nino/nino2.svg',
                'precio' => 12.99,
                'cantidad' => 10,
                'categoria_id' => 3
            ], 
            [
                'nombre' => 'Conjunto Judo Infantil',
                'descripcion' => 'Traje blanco, Cinturón naranja, Pantalón reforzado',
                'imagen' => 'img/nina/nina4.svg',
                'precio' => 49.99,
                'cantidad' => 10,
                'categoria_id' => 4
            ],
            [
                'nombre' => 'Conjunto Niño Casual',
                'descripcion' => 'Camiseta verde, Pantalón corto beige',
                'imagen' => 'img/nino/nino2.svg',
                'precio' => 15.99,
                'cantidad' => 10,
                'categoria_id' => 3
            ],
            [
                'nombre' => 'Conjunto Judo Infantil',
                'descripcion' => 'Traje blanco, Cinturón naranja, Pantalón reforzado',
                'imagen' => 'img/nino/nino4.svg',
                'precio' => 49.99,
                'cantidad' => 10,
                'categoria_id' => 3
            ],
            [
                'nombre' => 'Conjunto Niña Rosa',
                'descripcion' => 'Camiseta rosa, Pantalón corto rosa, Gorra de tenis rosa',
                'imagen' => 'img/nina/nina2.svg',
                'precio' => 29.99,
                'cantidad' => 10,
                'categoria_id' => 4
            ],
            [
                'nombre' => 'Conjunto Niña Deportiva',
                'descripcion' => 'pantalon corto, camiseta de manga corta banca',
                'imagen' => 'img/nina/nina3.svg',
                'precio' => 27.99,
                'cantidad' => 10,
                'categoria_id' => 4
            ],
            [
                'nombre' => 'Conjunto Fútbol Americano',
                'descripcion' => 'Pantalón blanco, Camiseta azul, Casco azul y blanco',
                'imagen' => 'img/hombre/rugby.svg',
                'precio' => 199.99,
                'cantidad' => 10,
                'categoria_id' => 1
            ],
            [
                'nombre' => 'Conjunto Baloncesto Hombre',
                'descripcion' => 'Camiseta blanca de manga corta, Pantalón blanco con rayas negras',
                'imagen' => 'img/hombre/baloncesto.svg',
                'precio' => 29.99,
                'cantidad' => 10,
                'categoria_id' => 1
            ],
            [
                'nombre' => 'Juego de Esgrima Hombre',
                'descripcion' => 'Pantalón y Máscara de esgrima',
                'imagen' => 'img/hombre/esgrima.svg',
                'precio' => 244.90,
                'cantidad' => 10,
                'categoria_id' => 1
            ],
            [
                'nombre' => 'Conjunto Mujer Gris y Negro',
                'descripcion' => 'Sujetador gris, Short negro con rayas rosas',
                'imagen' => 'img/mujer/mujer5.svg',
                'precio' => 6.99,
                'cantidad' => 10,
                'categoria_id' => 2
            ],
            [
                'nombre' => 'Conjunto Mujer Rosa y Negro',
                'descripcion' => 'Sujetador rosa, Leggins negro',
                'imagen' => 'img/mujer/mujer1.svg',
                'precio' => 17.99,
                'cantidad' => 10,
                'categoria_id' => 2
            ],
            [
                'nombre' => 'Conjunto Cricket Hombre',
                'descripcion' => 'Jersey manga corta blanco, Guantes, Pantalón blanco',
                'imagen' => 'img/hombre/cricket.svg',
                'precio' => 108.99,
                'cantidad' => 10,
                'categoria_id' => 1
            ],
            [
                'nombre' => 'Juego de Snowboard Infantil',
                'descripcion' => 'Akasha Wide, Binding Master, Boots',
                'imagen' => 'img/nina/nina1.svg',
                'precio' => 95.90,
                'cantidad' => 10,
                'categoria_id' => 4
            ],
        ];

        foreach ($productos as $producto) {
            Producto::create($producto);
        }
    }
}
