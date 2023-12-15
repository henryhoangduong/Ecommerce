<?php

namespace App\Http\Controllers;

use App\Models\Orders;
use Illuminate\Http\Request;
use App\Models\Carts;
use Carbon\Carbon;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;

class OrderController extends Controller
{
    public function index(Request $request){

        $user_id = Auth::guard('api')->user()->id;
        $time = Carbon::now()->toDateString();
        $total = 0;
        $items=DB::table('Carts')
                ->select('Carts.quantities','Products.price')
                ->join('Products', 'Carts.product_id', '=', 'Products.id')
                ->join('Users', 'Carts.user_id', '=', 'Users.id')
                ->where('user_id', $user_id)->get();
        $total = 0;
        foreach($items as $item){
            $total = (int) $item->price * $item->quantities;
        }
        $order = new Orders ;
        if(count(Orders::all())==0){
            $order->id = 1;
        }
        
        $order->customer_id = $user_id;
        $order->order_date = $time;
        $order->payment_method = 'cash';
        $order->total_amount = $total;
        $order->save();
        return Response($order);
    }
    public function read(Request $request){
        $orders = Orders::all();
        return Response($orders);
    }
    public function readbyuser(Request $request){
        $customer_id = Auth::guard('api')->user()->id;
        $orders = Orders::where('customer_id', $customer_id)->get();
        return Response($orders);
    }
}
