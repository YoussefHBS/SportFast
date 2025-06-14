<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class PedidosSeeder extends Seeder
{
    public function run(): void
    {
        DB::table('pedidos')->insert([
            [
                'cliente_id' => 1,
                'precio_total' => 59.98,
                'created_at' => now(),
                'updated_at' => now()
            ]
        ]);
    }
}

