<?php

namespace App\Http\Controllers;

use App\Http\Models\Orders;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class OrderController extends Controller
{
    public function index(Request $request){
        $user_id = Auth::guard('api')->user()->id;
    }
}
