import HomePage from '../views/pages/home-page';
import BintangRoomPage from '../views/pages/detail-bintang';
import BulanRoomPage from '../views/pages/detail-bulan';
import AuroraRoomPage from '../views/pages/detail-aurora';
import MeteorRoomPage from '../views/pages/detail-meteor';
import SatelitRoomPage from '../views/pages/detail-satelit';
import TugulangitRoomPage from '../views/pages/detail-tugulangit';

const routes = {
  '/': HomePage, // default page
  '/home': HomePage,
  '/kamar-tugulangit': TugulangitRoomPage,
  '/kamar-bintang': BintangRoomPage,
  '/kamar-bulan': BulanRoomPage,
  '/kamar-aurora': AuroraRoomPage,
  '/kamar-meteor': MeteorRoomPage,
  '/kamar-satelit': SatelitRoomPage,
};

export default routes;
