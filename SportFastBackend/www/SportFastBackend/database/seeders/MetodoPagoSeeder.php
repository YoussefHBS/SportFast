<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class MetodoPagoSeeder extends Seeder
{
    public function run(): void
    {
        DB::table('metodos_pago')->insert([
            ['nombre' => 'Tarjeta de crédito'],
            ['nombre' => 'PayPal'],
            ['nombre' => 'Transferencia bancaria'],
        ]);
    }
}
