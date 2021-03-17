const genString = (a, base, off) => (String.fromCharCode(a + (26 + base + off - a) % 26));

const cipher = {
  encode: function (offset, string) {
    offset = isNaN(parseInt(offset)) ? undefined : ((offset % 26) + 26) % 26;
    string = (typeof string === 'string') ? string : undefined;
    let mensaje = '';

    if (offset == undefined) {
      alert('Revise que el offset sea un número');
    }
    //Toma cada elemento del string y verifica que su codigo ASCII sea de una letra

    for (let i = 0; i < string.length; i++) {
      let charCode = string.charCodeAt(i);
      let tipo = (charCode >= 65 && charCode < 91) ? 'Mayus' : (charCode >= 97 && charCode < 123) ? 'Minus' : 'Otro';

      switch (tipo) {
        case 'Mayus':
          //Mayusculas
          mensaje = mensaje + genString(65, charCode, offset);
          break
        case 'Minus':
          //Minusculas
          mensaje = mensaje + genString(97, charCode, offset);
          break
        default:
          //Caracteres que no se encuentran en el alfabeto
          mensaje = mensaje + string[i];
          break
      }
    }
    return mensaje
  },

  decode: function (offset, string) {
    offset = isNaN(parseInt(offset)) ? undefined : ((offset % 26) + 26) % 26;
    string = (typeof string === 'string') ? string : undefined;
    let mensaje = '';

    //Toma cada elemento del string y verifica que su codigo ASCII sea de una letra
    if (offset == undefined) {
      alert('Revise que el offset sea un número');
    }

    for (let i = 0; i < string.length; i++) {
      let charCode = string.charCodeAt(i);
      let tipo = (charCode >= 65 && charCode < 91) ? 'Mayus' : (charCode >= 97 && charCode < 123) ? 'Minus' : 'Otro';
      switch (tipo) {
        case 'Mayus':
          mensaje = mensaje + genString(65, charCode, -offset);
          break
        case 'Minus':
          mensaje = mensaje + genString(97, charCode, -offset);
          break
        default:
          mensaje = mensaje + string[i];
          break
      }
    }
    return mensaje
  },
};

export default cipher;
