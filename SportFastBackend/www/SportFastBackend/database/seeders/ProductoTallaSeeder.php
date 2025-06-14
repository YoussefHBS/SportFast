<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Producto;
use App\Models\Color;

class ProductoTallaSeeder extends Seeder
{
    public function run()
{
    $productos = Producto::all();
    $colores = Color::all();

    foreach ($productos as $producto) {
        $producto->colores()->attach(
            $colores->random(rand(1, 3))->pluck('id')->toArray()
        );
    }
}
}

