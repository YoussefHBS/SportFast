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
        // Primero obtenemos un cliente existente
        $cliente = DB::table('cliente')->first();

        // Verificamos si hay cliente
        if ($cliente) {
            DB::table('direcciones')->insert([
                [
                    'cliente_id' => $cliente->id,
                    'calle' => 'Calle Falsa 123',
                    'ciudad' => 'Ciudad Ejemplo',
                    'estado' => 'Estado Ejemplo',
                    'codigo_postal' => '12345',
                    'pais' => 'País Ejemplo',
                    'created_at' => now(),
                    'updated_at' => now(),
                ],
            ]);
        } else {
            $this->command->warn('⚠ No hay clientes registrados para asignar direcciones.');
        }
    }
}
