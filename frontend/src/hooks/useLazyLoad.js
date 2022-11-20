//custom hook to lazy load posts from the database
import { useState, useEffect } from "react";
import axios from "../api/axios";

const useLazyLoad = (url) => {
