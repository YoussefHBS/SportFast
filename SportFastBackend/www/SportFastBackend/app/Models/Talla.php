<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Talla extends Model
{
    protected $table = 'tallas';

    protected $fillable = ['nombre'];
    
    public function producto()
{
    return $this->belongsTo(Producto::class, 'producto_id');
}
}
