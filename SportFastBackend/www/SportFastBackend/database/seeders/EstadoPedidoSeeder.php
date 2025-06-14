<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class EstadoPedidoSeeder extends Seeder
{
    public function run(): void
    {
        DB::table('estados_pedido')->insert([
            ['nombre' => 'Pendiente'],
            ['nombre' => 'En camino'],
            ['nombre' => 'Entregado'],
        ]);
    }
}

