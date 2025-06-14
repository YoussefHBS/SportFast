<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Producto extends Model
{
    protected $table = 'productos';

    protected $fillable = [
        'nombre',
        'descripcion',
        'imagen',
        'precio',
        'cantidad',
        'categoria_id',
    ];

    public function categoria(): BelongsTo
    {
        return $this->belongsTo(Categoria::class, 'categoria_id');
    }

    public function pedidosDetalles(): HasMany
    {
        return $this->hasMany(PedidoDetalle::class, 'producto_id');
    }
    public function colores()
{
    return $this->belongsToMany(Color::class, 'producto_color');
}


    public function tallas()
{
    return $this->belongsToMany(Talla::class, 'producto_talla');
}

}
