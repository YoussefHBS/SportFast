<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Color extends Model
{
    protected $table = 'colores';

    protected $fillable = ['nombre'];

    public function productos()
{
    return $this->belongsToMany(Producto::class, 'producto_color');
}
}

