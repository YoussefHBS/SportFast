<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ClientesSeeder extends Seeder
{
    public function run(): void
    {
        DB::table('cliente')->insert([
    [
        'nombre' => 'Juan',
        'apellido1' => 'Pérez',
        'apellido2' => 'Gómez',
        'direccion' => 'Calle Falsa 123',
        'correo' => 'juan@example.com',
        'telefono' => '600000000',
        'admin' => true,
        'password' => bcrypt('youssefmejor'), 
        'created_at' => now(),
        'updated_at' => now()
    ],
]);

    }
}

