export type Lucid = {
  "version": "0.1.0",
  "name": "lucid",
  "instructions": [
    {
      "name": "initializePool",
      "accounts": [
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "pool",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "treasurer",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "mint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "baseMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "stableMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "lptMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "treasury",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "stableTreasury",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "lptTreasury",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "associatedTokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "fee",
          "type": "u64"
        },
        {
          "name": "amount",
          "type": "u64"
        },
        {
          "name": "amountStable",
          "type": "u64"
        }
      ]
    },
    {
      "name": "mintStable",
      "accounts": [
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "pool",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "treasurer",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "baseMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "stableMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "baseTreasury",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "stableTreasury",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "baseTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "stableTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "associatedTokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "amount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "burnStable",
      "accounts": [
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "pool",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "treasurer",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "baseMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "stableMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "baseTreasury",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "stableTreasury",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "baseTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "stableTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "associatedTokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "amount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "addLiquidity",
      "accounts": [
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "pool",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "treasurer",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "mint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "stableMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "lptMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "treasury",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "stableTreasury",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "lptTreasury",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "stableTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "lptTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "associatedTokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "amount",
          "type": "u64"
        },
        {
          "name": "amountStable",
          "type": "u64"
        }
      ]
    },
    {
      "name": "removeLiquidity",
      "accounts": [
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "pool",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "treasurer",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "mint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "stableMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "lptMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "treasury",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "stableTreasury",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "lptTreasury",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "stableTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "lptTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "associatedTokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "lptAmount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "borrow",
      "accounts": [
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "pool",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "treasurer",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "baseMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "lptMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "baseTreasury",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "lptTreasury",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "baseTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "lptTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "cheque",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "associatedTokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "lptAmount",
          "type": "u64"
        }
      ]
    }
  ],
  "accounts": [
    {
      "name": "cheque",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "authority",
            "type": "publicKey"
          },
          {
            "name": "pool",
            "type": "publicKey"
          },
          {
            "name": "borrowAmount",
            "type": "u64"
          },
          {
            "name": "repayAmount",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "pool",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "authority",
            "type": "publicKey"
          },
          {
            "name": "mint",
            "type": "publicKey"
          },
          {
            "name": "baseMint",
            "type": "publicKey"
          },
          {
            "name": "stableMint",
            "type": "publicKey"
          },
          {
            "name": "lptMint",
            "type": "publicKey"
          },
          {
            "name": "treasurer",
            "type": "publicKey"
          },
          {
            "name": "balance",
            "type": "u64"
          },
          {
            "name": "stableBalance",
            "type": "u64"
          },
          {
            "name": "baseBalance",
            "type": "u64"
          },
          {
            "name": "fee",
            "type": "u64"
          }
        ]
      }
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "OverBorrow",
      "msg": "Over borrow limit!"
    },
    {
      "code": 6001,
      "name": "AmountZero",
      "msg": "Required quantity greater than zero"
    },
    {
      "code": 6002,
      "name": "Slippage",
      "msg": "Slippage error"
    }
  ]
};

export const IDL: Lucid = {
  "version": "0.1.0",
  "name": "lucid",
  "instructions": [
    {
      "name": "initializePool",
      "accounts": [
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "pool",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "treasurer",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "mint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "baseMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "stableMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "lptMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "treasury",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "stableTreasury",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "lptTreasury",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "associatedTokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "fee",
          "type": "u64"
        },
        {
          "name": "amount",
          "type": "u64"
        },
        {
          "name": "amountStable",
          "type": "u64"
        }
      ]
    },
    {
      "name": "mintStable",
      "accounts": [
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "pool",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "treasurer",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "baseMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "stableMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "baseTreasury",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "stableTreasury",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "baseTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "stableTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "associatedTokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "amount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "burnStable",
      "accounts": [
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "pool",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "treasurer",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "baseMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "stableMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "baseTreasury",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "stableTreasury",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "baseTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "stableTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "associatedTokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "amount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "addLiquidity",
      "accounts": [
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "pool",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "treasurer",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "mint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "stableMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "lptMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "treasury",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "stableTreasury",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "lptTreasury",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "stableTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "lptTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "associatedTokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "amount",
          "type": "u64"
        },
        {
          "name": "amountStable",
          "type": "u64"
        }
      ]
    },
    {
      "name": "removeLiquidity",
      "accounts": [
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "pool",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "treasurer",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "mint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "stableMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "lptMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "treasury",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "stableTreasury",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "lptTreasury",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "stableTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "lptTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "associatedTokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "lptAmount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "borrow",
      "accounts": [
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "pool",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "treasurer",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "baseMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "lptMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "baseTreasury",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "lptTreasury",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "baseTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "lptTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "cheque",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "associatedTokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "lptAmount",
          "type": "u64"
        }
      ]
    }
  ],
  "accounts": [
    {
      "name": "cheque",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "authority",
            "type": "publicKey"
          },
          {
            "name": "pool",
            "type": "publicKey"
          },
          {
            "name": "borrowAmount",
            "type": "u64"
          },
          {
            "name": "repayAmount",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "pool",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "authority",
            "type": "publicKey"
          },
          {
            "name": "mint",
            "type": "publicKey"
          },
          {
            "name": "baseMint",
            "type": "publicKey"
          },
          {
            "name": "stableMint",
            "type": "publicKey"
          },
          {
            "name": "lptMint",
            "type": "publicKey"
          },
          {
            "name": "treasurer",
            "type": "publicKey"
          },
          {
            "name": "balance",
            "type": "u64"
          },
          {
            "name": "stableBalance",
            "type": "u64"
          },
          {
            "name": "baseBalance",
            "type": "u64"
          },
          {
            "name": "fee",
            "type": "u64"
          }
        ]
      }
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "OverBorrow",
      "msg": "Over borrow limit!"
    },
    {
      "code": 6001,
      "name": "AmountZero",
      "msg": "Required quantity greater than zero"
    },
    {
      "code": 6002,
      "name": "Slippage",
      "msg": "Slippage error"
    }
  ]
};
