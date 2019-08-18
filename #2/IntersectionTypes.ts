type Bird = {
  wing: Wing;
  fly: () => void;
};

type Kimera = Dog & Bird;
