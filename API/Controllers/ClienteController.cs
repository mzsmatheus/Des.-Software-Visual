using System;
using System.Collections.Generic;
using System.Linq;
using API.Data;
using API.Models;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [ApiController]
    [Route("api/cliente")]
    public class ClienteController : ControllerBase
    {
        private readonly DataContext _context;

        //Construtor
        public ClienteController(DataContext context) => _context = context;

        //POST: api/cliente/create
        [HttpPost]
        [Route("create")]
        public IActionResult Create([FromBody] Cliente cliente)
        {
            _context.Clientes.Add(cliente);
            _context.SaveChanges();
            return Created("", cliente);
        }

        //GET: api/cliente/list
        [HttpGet]
        [Route("list")]
        public IActionResult List() => Ok(_context.Clientes.ToList());

        //GET: api/cliente/getbyid/1
        [HttpGet]
        [Route("getbyid/{id}")]
        public IActionResult GetById([FromRoute] int id)
        {
            //Buscar um cliente pela chave primária
            Cliente cliente = _context.Clientes.Find(id);
            if (cliente == null)
            {
                return NotFound();
            }
            return Ok(cliente);
        }

        //DELETE: api/cliente/delete/
        [HttpDelete]
        [Route("delete/{name}")]
        public IActionResult Delete([FromRoute] string name)
        {
            //Expressão lambda
            //Buscar um cliente pelo nome
            Cliente cliente = _context.Clientes.FirstOrDefault
            (
                cliente => cliente.Nome == name
            );
            if (cliente == null)
            {
                return NotFound();
            }
            _context.Clientes.Remove(cliente);
            _context.SaveChanges();
            return Ok(_context.Clientes.ToList());
        }

        //PUT: api/cliente/create
        [HttpPut]
        [Route("update")]
        public IActionResult Update([FromBody] Cliente cliente)
        {
            _context.Clientes.Update(cliente);
            _context.SaveChanges();
            return Ok(cliente);
        }


    }
}