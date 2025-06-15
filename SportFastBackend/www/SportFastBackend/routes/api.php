<?php

use Illuminate\Support\Facades\Route;

use App\Http\Controllers\CategoriaController;
use App\Http\Controllers\ColorController;
use App\Http\Controllers\ClienteController;
use App\Http\Controllers\DireccionController;
use App\Http\Controllers\PagoController;
use App\Http\Controllers\PedidoController;
use App\Http\Controllers\PedidoDetalleController;
use App\Http\Controllers\ProductoController;
use App\Http\Controllers\TallaController;

// Categorias
Route::get('/categorias', [CategoriaController::class, 'index']);
Route::get('/categorias/{id}', [CategoriaController::class, 'show']);
Route::post('/categorias', [CategoriaController::class, 'store']);
Route::put('/categorias/{id}', [CategoriaController::class, 'update']);
Route::delete('/categorias/{id}', [CategoriaController::class, 'destroy']);

// Colores
Route::get('/colores', [ColorController::class, 'index']);
Route::get('/colores/{id}', [ColorController::class, 'show']);
Route::post('/colores', [ColorController::class, 'store']);
Route::put('/colores/{id}', [ColorController::class, 'update']);
Route::delete('/colores/{id}', [ColorController::class, 'destroy']);

// Clientes
Route::get('/clientes', [ClienteController::class, 'index']);
Route::get('/clientes/{id}', [ClienteController::class, 'show']);
Route::post('/clientes', [ClienteController::class, 'store']);
Route::put('/clientes/{id}', [ClienteController::class, 'update']);
Route::delete('/clientes/{id}', [ClienteController::class, 'destroy']);

// Direcciones
Route::get('/direcciones', [DireccionController::class, 'index']);
Route::get('/direcciones/{id}', [DireccionController::class, 'show']);
Route::post('/direcciones', [DireccionController::class, 'store']);
Route::put('/direcciones/{id}', [DireccionController::class, 'update']);
Route::delete('/direcciones/{id}', [DireccionController::class, 'destroy']);

// Pagos
Route::get('/pagos', [PagoController::class, 'index']);
Route::get('/pagos/{id}', [PagoController::class, 'show']);
Route::post('/pagos', [PagoController::class, 'store']);
Route::put('/pagos/{id}', [PagoController::class, 'update']);
Route::delete('/pagos/{id}', [PagoController::class, 'destroy']);

// Pedidos
Route::get('/pedidos', [PedidoController::class, 'index']);
Route::get('/pedidos/{id}', [PedidoController::class, 'show']);
Route::post('/pedidos', [PedidoController::class, 'store']);
Route::put('/pedidos/{id}', [PedidoController::class, 'update']);
Route::delete('/pedidos/{id}', [PedidoController::class, 'destroy']);

// Pedidos Detalles
Route::get('/pedidos_detalles', [PedidoDetalleController::class, 'index']);
Route::get('/pedidos_detalles/{id}', [PedidoDetalleController::class, 'show']);
Route::post('/pedidos_detalles', [PedidoDetalleController::class, 'store']);
Route::put('/pedidos_detalles/{id}', [PedidoDetalleController::class, 'update']);
Route::delete('/pedidos_detalles/{id}', [PedidoDetalleController::class, 'destroy']);

// Productos
Route::get('/productos', [ProductoController::class, 'index']);
Route::get('/productos/{id}', [ProductoController::class, 'show']);
Route::post('/productos', [ProductoController::class, 'store']);
Route::put('/productos/{id}', [ProductoController::class, 'update']);
Route::patch('/productos/{id}', [ProductoController::class, 'update']);
Route::delete('/productos/{id}', [ProductoController::class, 'destroy']);
Route::post('/productos/{id}/colores', [ProductoController::class, 'asignarColores']);
Route::post('/productos/{id}/tallas', [ProductoController::class, 'asignarTallas']);


// Tallas
Route::get('/tallas', [TallaController::class, 'index']);
Route::get('/tallas/{id}', [TallaController::class, 'show']);
Route::post('/tallas', [TallaController::class, 'store']);
Route::put('/tallas/{id}', [TallaController::class, 'update']);
Route::delete('/tallas/{id}', [TallaController::class, 'destroy']);


use App\Http\Controllers\AuthController;
use Illuminate\Http\Request;

Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);

Route::middleware('auth:sanctum')->group(function () {
    Route::post('/logout', [AuthController::class, 'logout']);
    Route::get('/user', [AuthController::class, 'user']);
});

use App\Http\Controllers\StripeController;

Route::post('/crear-sesion', [StripeController::class, 'crearSesion']);

use App\Http\Controllers\AdminController;

Route::middleware('auth:sanctum')->group(function () {
    Route::get('/admin/productos', [AdminController::class, 'index']);
    Route::post('/admin/productos', [AdminController::class, 'store']);
    Route::put('/admin/productos/{id}', [AdminController::class, 'update']);
    Route::delete('/admin/productos/{id}', [AdminController::class, 'destroy']);
});
