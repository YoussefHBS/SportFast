<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class PagosSeeder extends Seeder
{
    public function run(): void
    {
        DB::table('pagos')->insert([
            [
                'pedido_id' => 1,
                'metodo_pago_id' => 1,
                'monto' => 59.98,
                'estado' => 'completado',
                'fecha_pago' => now(),
                'created_at' => now(),
                'updated_at' => now()
            ]
        ]);
    }
}

