<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Producto;
use App\Models\Talla;


class ProductoColorSeeder extends Seeder
{
    public function run()
{
    $productos = Producto::all();
    $tallas = Talla::all();

    foreach ($productos as $producto) {
        $producto->tallas()->attach(
            $tallas->random(rand(1, 4))->pluck('id')->toArray()
        );
    }
}
}

