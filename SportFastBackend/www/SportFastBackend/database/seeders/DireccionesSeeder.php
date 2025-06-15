<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class DireccionesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $cliente = DB::table('cliente')->first();

        if ($cliente) {
            DB::table('direcciones')->insert([
                [
                    'cliente_id' => $cliente->id,
                    'calle' => 'Calle Zapillo',
                    'ciudad' => 'almería',
                    'estado' => 'andalucía',
                    'codigo_postal' => '4002',
                    'pais' => 'España',
                    'created_at' => now(),
                    'updated_at' => now(),
                ],
            ]);
        }
    }
}
