    const banco = {
        conta: "12345",
        agencia: "7080",
        tipoConta: "Corrente",
        saldo: 1000,
    
        buscarSaldo: function () {
        return this.saldo;
        },
    
        deposito: function (valor) {
        this.saldo += valor;
        return this.saldo;
        },
    
        saque: function (valor) {
        if (valor <= this.saldo) {
            this.saldo -= valor;
            return this.saldo;
        } else {
            return "Saldo insuficiente.";
        }
        },
    
        numeroConta: function () {
        return this.conta;
        },
    };

    function mostrarSaldo() {
        const saldoContainer = document.getElementById("saldoContainer");
        const saldoElement = document.getElementById("saldo");
    
        saldoElement.textContent = banco.buscarSaldo();
        saldoContainer.style.display = "block";
    }
    
    function realizarDeposito() {
        const valor = parseFloat(prompt("Digite o valor do depósito:"));
        if (!isNaN(valor)) {
        banco.deposito(valor);
        mostrarSaldo();
        }
    }
    
    function realizarSaque() {
        const valor = parseFloat(prompt("Digite o valor do saque:"));
        if (!isNaN(valor)) {
        const resultado = banco.saque(valor);
        if (typeof resultado === "number") {
            mostrarSaldo();
        } else {
            alert(resultado);
        }
        }
    }
    
    function mostrarNumeroConta() {
        const numeroContaElement = document.getElementById("conta");
        
        if (numeroContaElement.style.display === "none") {
            numeroContaElement.style.display = "block";
        } else {
            numeroContaElement.style.display = "none";
        }
    }
    