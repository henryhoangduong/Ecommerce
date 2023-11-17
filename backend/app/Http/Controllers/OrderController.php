<?php

namespace App\Http\Controllers;

use App\Http\Models\Orders;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class OrderController extends Controller
{
    public function index(Request $request){
        if (Auth::guard('api')->user()->role){
            return Response(['message' => 'You are admin not customer'], 404);
        }
    }

}
