<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Contact;

class AgendaController extends Controller
{
    
    //Display a listing of the resource.
     
    public function index()
    {
        $contacts = Contact::all();
        return response()->json($contacts);
    }

    //Store a newly created resource in storage.
     
    public function store(Request $request)
    {
        $contact = Contact::create($request->all());
        return response()->json('Contacto almacenado correctamente');
    }
    
    //Show the form for editing the specified resource.
   
    public function edit($id)
    {
        $contact = Contact::find($id);
        if(!$contact)
        {
            return response()->json('El contacto no existe');
        }
        return response()->json($contact);
    }

  
    //Update the specified resource in storage.
    
    public function update(Request $request, $id)
    {
        $contact = Contact::find($id);
        $contact->fill($request->all());
        $contact->save();

        return response()->json('Contacto actualizado correctamente');
    }

    //Remove the specified resource from storage.
     
    public function destroy($id)
    {
        $contact = Contact::find($id);
        if(!$contact)
        {
            return response()->json('El contacto no existe');
        }
        $contact->delete();

        return response()->json('Contacto eliminado correctamente');
    }
}
