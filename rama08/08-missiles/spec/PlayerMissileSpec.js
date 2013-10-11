/*

  Requisitos: 

  La nave del usuario disparar� 2 misiles si est� pulsada la tecla de
  espacio y ha pasado el tiempo de recarga del arma.

  El arma tendr� un tiempo de recarga de 0,25s, no pudi�ndose enviar
  dos nuevos misiles antes de que pasen 0,25s desde que se enviaron
  los anteriores



  Especificaci�n:

  - Hay que a�adir a la variable sprites la especificaci�n del sprite
    missile

  - Cada vez que el usuario presione la tecla de espacio se a�adir�n
    misiles al tablero de juego en la posici�n en la que est� la nave
    del usuario. En el c�digo de la clase PlayerSip es donde tienen
    que a�adirse los misiles

  - La clase PlayerMissile es la que implementa los misiles. Es
    importante que la creaci�n de los misiles sea poco costosa pues va
    a haber muchos disparos, para lo cual se declarar�n los m�todos de
    la clase en el prototipo

*/

describe("Clase PlayerMissile", function(){
    // Una vez comenzado el juego deber� aparecer la nave del jugador en
    // la parte inferior

    // La nave debera moverse a izquierda y derecha con las teclas de las
    // flechas izda y dcha

    var canvas, ctx;

    beforeEach(function(){
	loadFixtures('index.html');

	canvas = $('#game')[0];
	expect(canvas).toExist();

	ctx = canvas.getContext('2d');
	expect(ctx).toBeDefined();

    });



    it("draw", function(){
	// Comprobamos que draw llama a SpriteSheet.draw con los
	// parametros adecuados
	var misil = new PlayerMissile(1,2);
	spyOn(SpriteSheet, "draw");

	// Necesitamos tener Game.width y Game.height para que el
	// constructor de PlayerShip pueda inicializar x e y
	Game = {width: 320, height: 480};



	misil.draw(ctx);
	waits(200);
	runs(function(){
		expect(misil.draw).toHaveBeenCalled();
 		expect(misil.draw.calls[0].args[1]).toEqual('missile');
 		expect(misil.draw.calls[0].args[2]).toEqual(1);
 		expect(misil.draw.calls[0].args[3]).toEqual(2);
 		expect(misil.draw.calls[0].args[4]).toEqual(0);
	});
	
    });


    /*it("step sin teclas pulsadas", function(){
	// Escribe tests para la clase PlayerShip
	// Deberian comprobar que:

	// 2. Tras llamar a step sin haber pulsado teclas la nave se
	// muestra en el mismo lugar

	// 3. Tras llamar a step con una flecha pulsada, se actualiza
	// la posicion de la nave


	// Necesitamos tener Game.width y Game.height para que el
	// constructor de PlayerShip pueda inicializar x e y.  Y
	// necesitamos Geame.keys para saber si se ha pulsado una
	// tecla
	Game = {width: 320, height: 480, keys: {'left': false}};
	
	// Creamos un PlayerShip para testar
	var miNave = new PlayerShip();	

 	miNave.step(1); // Hacemos como que ha pasado 1 segundo
	// Tras step, con Game.keys['left'] == false, no debe haberse movido,
        // por lo que lo comparamos con la posici�n x inicial de PlayerShip
	expect(miNave.x).toEqual(Game.width/2 - miNave.w / 2);


    });*/
});
