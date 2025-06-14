<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ColoresSeeder extends Seeder
{
    public function run(): void
    {
        DB::table('colores')->insert([
            ['nombre' => 'Rojo'],
            ['nombre' => 'Azul'],
            ['nombre' => 'Negro'],
            ['nombre' => 'Blanco'],
        ]);
    }
}

