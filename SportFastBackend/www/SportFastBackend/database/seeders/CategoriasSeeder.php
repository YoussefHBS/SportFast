<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Categoria;

class CategoriasSeeder extends Seeder
{
    public function run()
    {
        Categoria::create(['nombre' => 'Hombre']);
        Categoria::create(['nombre' => 'Mujer']);
        Categoria::create(['nombre' => 'nino']);
        Categoria::create(['nombre' => 'nina']);

        // Más categorías si quieres
    }
}

