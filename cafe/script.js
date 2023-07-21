// Array de endereços de exemplo
const addresses = [
    "Rua A, 123",
    "Avenida B, 456",
    "Praça C, 789",
    "Alameda D, 101",
    "Estrada E, 222",
    "Futuramente adicionar campo próprio do google maps contendo os endereços"
  ];
  
  // Função para criar a lista de endereços
  function createAddressList() {
    const addressList = document.getElementById("address-list");

    addresses.forEach((address) => {
      const listItem = document.createElement("div");
      listItem.textContent = address;
      addressList.appendChild(listItem);
    });
  }
  
  // Chama a função para criar a lista de endereços quando a página é carregada
  window.addEventListener("load", createAddressList);
  