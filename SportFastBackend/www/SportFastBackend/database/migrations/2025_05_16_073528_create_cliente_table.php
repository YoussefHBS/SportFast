<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('cliente', function (Blueprint $table) {
    $table->id();
    $table->timestamps();
    $table->string('nombre');
    $table->string('apellido1');
    $table->string('apellido2')->nullable();
    $table->string('direccion');
    $table->string('correo')->unique();
    $table->string('telefono', 15);
    $table->boolean('admin')->default(false);
});

    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('cliente');
    }
};
