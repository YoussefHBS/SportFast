<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $this->call([
            CategoriasSeeder::class,
            ProductosSeeder::class,
            ClientesSeeder::class,
            DireccionesSeeder::class,
            MetodoPagoSeeder::class,
            EstadoPedidoSeeder::class,
            TallasSeeder::class,
            ColoresSeeder::class,
            PedidosSeeder::class,
            PedidosDetallesSeeder::class,
            PagosSeeder::class,
            ProductoTallaSeeder::class,
            ProductoColorSeeder::class,
        ]);
    }
}
