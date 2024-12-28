type AngleRaymond = {
  name: string;
  goodDeeds: number; //<--- right
};

type EvilRaymond = {
  name: string;
  evilPlans: number; //<----lame
};

type Raymond = AngleRaymond | EvilRaymond;//(I didn't tag)
