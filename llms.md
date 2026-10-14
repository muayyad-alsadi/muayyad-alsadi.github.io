# Muayyad Alsadi

**Vice President of Engineering at OpenSooq · Founder of podman-compose**
Amman, Jordan

A leading open-source figure in the Arab world, in the field since 2004. The question is not which technology I can use, but which technology I was part of making.

- Email: [alsadi@gmail.com](mailto:alsadi@gmail.com)
- GitHub: [github.com/muayyad-alsadi](https://github.com/muayyad-alsadi/) — 90 public repositories, 261 followers; ojuba-org and OpenSooq; Arctic Code Vault Contributor
- LinkedIn: [linkedin.com/in/muayyadalsadi](https://www.linkedin.com/in/muayyadalsadi)
- X / Twitter: [twitter.com/muayyadalsadi](https://twitter.com/muayyadalsadi/memberships)
- Stack Exchange: [stackexchange.com/users/428152/muayyad-alsadi](https://stackexchange.com/users/428152/muayyad-alsadi?tab=accounts)
- Google Scholar: [15 citations](https://scholar.google.com/citations?user=PC9NyDgAAAAJ&hl=en)

Open source since 2002. Arabic (native), English.

I lead engineering where search, recommendation, data and the platform under them meet. The same standard applies in open source: a limit found in production, a fix sent upstream, and a write-up other teams can use. That record is in the official Podman project, in Docker, NGINX, Fedora and the WebAssembly runtime, and in print on Red Hat Developer, Fedora Magazine and IEEE.

## Now — OpenSooq

Vice President of Engineering, September 2015 – present, Amman, Jordan.

- **Search engine.** I own search, ranking and information retrieval for OpenSooq’s classifieds marketplace.
- **Recommendation systems.** I develop and improve recommendation across the product.
- **Data science and engineering.** I build data-intensive systems and apply them to product problems.
- **Backend and infrastructure.** I lead the platform that runs these capabilities at scale.

## Experience

I have worked with companies, products and teams that set a high technical bar.

### Technical Manager, Vision Advanced Systems

July 2014 – July 2015, Jordan. Managed development teams in Jordan and Egypt, plus the infrastructure and support team, while staying hands-on in the code.

### Senior Software Technologist, Jeeran

October 2010 – August 2014. Database officer and core developer, promoted to Chief Engineer.

### Consulting

Around 2015, on my own and inside a client’s team.

## Open source

### podman-compose — founder and maintainer

[github.com/containers/podman-compose](https://github.com/containers/podman-compose) · 2019 – present

Runs standard Compose files (`docker-compose.yml`) on Podman, Red Hat’s daemonless, rootless container engine. Teams keep the stacks they already have and gain Podman’s security model: no root-owned daemon, containers running as unprivileged users. It now lives in the official [containers](https://github.com/containers) organization, beside Podman, Buildah and Skopeo.

6.2k GitHub stars · 630 forks · 230+ contributors (as of October 2026).

### Ojuba Linux

Lead developer of the Fedora-based Arabic Linux distribution. [ojuba-org](https://github.com/ojuba-org) on GitHub.

## Upstream

Upstream work runs from a new feature to the patch a release was waiting on. Patches sent by mail, including NGINX, Fedora, WINE and GNOME, are not all GitHub pull requests.

- **Docker.** Years of contributions, always in the plural. An early proposal for multi-stage builds: a flat switch-root to a sub-image ([moby #15271](https://github.com/moby/moby/issues/15271), August 2015), closer to the form Docker shipped in 17.05 than Solomon Hykes’ nested `IN { }` / `PUBLISH` ([#7115](https://github.com/moby/moby/issues/7115)). The point was to stop shipping compilers and build-time dependencies. Also a clear error when a host volume path does not start with `/` ([#27985](https://github.com/moby/moby/pull/27985), 2016), and `dnf download` support for busybox in [Fedora-Dockerfiles #171](https://github.com/fedora-cloud/Fedora-Dockerfiles/pull/171).
- **wasmtime-py, Bytecode Alliance.** Made copying data between Python and WebAssembly linear memory 400× faster, replacing per-byte access with a direct `memmove` ([#134](https://github.com/bytecodealliance/wasmtime-py/pull/134), merged 2023). Proposed a further 7× faster call path ([#139](https://github.com/bytecodealliance/wasmtime-py/pull/139), open). Written up on Medium; the same bottleneck was reported to Wasmer.
- **NGINX.** Weighted `ip_hash` (2012). The docs said `ip_hash` could not be combined with `weight`. [Ticket #144](https://trac.nginx.org/nginx/ticket/144) carried a working algorithm, and Maxim Dounin added weight support in NGINX 1.3.1. It had been called impossible on the mailing list.
- **Fedora / RHEL, Red Hat.** Proposed and implemented the [MediaRepo](https://fedoraproject.org/wiki/Features/MediaRepo) feature. Four PackageKit patches: [277490d](https://github.com/hughsie/PackageKit/commit/277490d1a), [5d1dede](https://github.com/hughsie/PackageKit/commit/5d1dede4a), [9ae160e](https://github.com/hughsie/PackageKit/commit/9ae160e0a), [97ba7c6](https://github.com/hughsie/PackageKit/commit/97ba7c687), and the [freedesktop copy](http://cgit.freedesktop.org/packagekit/commit/?id=9ae160e0a). Yumex. A working [sysctl.d](https://lists.fedoraproject.org/pipermail/devel/2012-March/164062.html). PulseAudio: stopped a denial of service caused by flooding the logs.
- **Podman.** Tests for parallel execution and networking ([#2570](https://github.com/containers/podman/pull/2570)) and docs pointing to third-party Compose tools ([#2981](https://github.com/containers/podman/pull/2981)), both merged in 2019.
- **DuckDB.** PostgreSQL compatibility: simulated `datallowconn` / `datistemplate` in `pg_catalog.pg_database` ([#22302](https://github.com/duckdb/duckdb/pull/22302), 2026).
- **scikit-learn.** Upstream contribution ([#10033](https://github.com/scikit-learn/scikit-learn/pull/10033), 2017).
- **Meilisearch.** [Issue #6365](https://github.com/meilisearch/meilisearch/issues/6365) (May 2026): documents with no embedding vector were scored as zeros, so cosine ranking could place them above real matches. The project called it a valid case for retrieval with optional media and set out a fix.
- **WINE.** Many patches to the Windows runtime on Linux, including [bug 7150](https://bugs.winehq.org/show_bug.cgi?id=7150).
- **GNOME.** Patches for [gnome-terminal](https://bugzilla.gnome.org/show_bug.cgi?id=321490#c15) and notification.
- **XML and XSLT.** [DocBook at xml.org](http://sourceforge.net/tracker/index.php?func=detail&aid=2402595&group_id=21935&atid=373749) (OASIS). [Publican](https://fedorahosted.org/publican/changeset/1254) XSLT fixes (Red Hat). [gnome-docs](https://bugzilla.gnome.org/show_bug.cgi?id=563559) XSLT fixes.
- **Xapian.** Fixes to the C++ search library ([ticket 355](http://trac.xapian.org/ticket/355)).
- **Whoosh.** Contributions to the Python search engine, used in thawab.
- **OpenStack.** Contributions to cloud infrastructure.
- **Bootstrap.** Fixed fluid thumbnails that broke after the first row ([issue](https://github.com/twitter/bootstrap/issues/3494#issuecomment-16703352)), and RTL support shipped as [Bootstrap RTL](https://muayyad-alsadi.github.io/bootstrap-rtl/) for v2 and v3, plus [rtl-xtra-rtl.css](https://gist.github.com/muayyad-alsadi/8c57640fc3962c06c16e), a direction-neutral stylesheet.
- **Yii.** [Lazy sessions](https://github.com/yiisoft/yii/issues/778#issuecomment-6095905) to limit denial of service. [Caching AuthManager](https://github.com/yiisoft/yii/issues/1533#issuecomment-9207350) to stop recursive queries. [CClientScript ordering](https://github.com/yiisoft/yii/pull/2263). [Dynamic partials](https://github.com/yiisoft/yii/issues/775) so blocks can be left out of a fully cached page. I brought the [Redis extension](http://www.yiiframework.com/forum/index.php?app=forums&module=forums&section=findpost&pid=156044) up to date. [yii-EClientScript](https://github.com/muayyad-alsadi/yii-EClientScript): combine and minify CSS and JavaScript with strong hash filenames based on mtime, including precompressed gzip for NGINX.
- **Also.** [keras-ocr #39](https://github.com/faustomorales/keras-ocr/pull/39) (2020). [open-headunit #1058](https://github.com/andreknieriem/open-headunit/pull/1058), open-source Android Auto, a USB-service crash. [jquery.smartbanner #10](https://github.com/jasny/jquery.smartbanner/pull/10), Chrome on iOS. A Unicode fix in the [Python LTI library](https://github.com/tophatmonocle/ims_lti_py/commit/9b25b8756dae03765f7f50db7323c74f1f1e4459) ([IMS LTI](http://www.imsglobal.org/toolsinteroperability2.cfm)). The Flatpak of Othman on [Flathub](https://github.com/flathub/com.github.ojubaorg.Othman/pull/3). I also wrote the django CMS installer, Jordanian Arabic data for arabic-mimesis, and awesome-jordan, and filed issues across Podman, TensorFlow, ClickHouse, Ansible, Consul, FreeIPA, Flatpak, Nextcloud and others: 98 issues in 57 repositories, October 2026.

## Research

[15 citations on Google Scholar](https://scholar.google.com/citations?user=PC9NyDgAAAAJ&hl=en).

- [*Accelerating stochastic gradient descent using adaptive mini-batch size*](https://doi.org/10.1109/ICTCS.2019.8923046) — Alsadi, Ghnemat, Awajan. IEEE ICTCS 2019. 6 citations. doi:10.1109/ICTCS.2019.8923046
- [*Visualizing clustered botnet traffic using t-SNE on aggregated NetFlows*](https://doi.org/10.1109/ICTCS.2017.30) — Alsadi, Hadi. ICTCS 2017. 7 citations. doi:10.1109/ICTCS.2017.30
- [*Using deep convolutional neural networks and knowledge transfer for image recognition*](https://www.proquest.com/openview/4a251d4909680cb23db6dddcfa6102cc/1?pq-origsite=gscholar&cbl=2026366&diss=y) — M.Sc. thesis, Princess Sumaya University for Technology, 2018. ProQuest 28022724. 2 citations.

## Writing

Published on Red Hat Developer, Fedora Magazine, the Project Atomic blog (Red Hat; now Fedora CoreOS) and Medium.

- [Moving hot loops from Python to WASM won’t be feasible without this trick](https://medium.com/@alsadi) — Medium, March 2023. Made calling WebAssembly from Python about 25× faster in the end-to-end benchmark; the `ctypes.memmove` fix became wasmtime-py #134. The same profile holds a two-part series on writing a database engine (May and June 2024), randomness in a ranking algorithm (February 2023), and serving files in Python after FastAPI failed a case (February 2023).
- [Building Smaller Container Images](https://fedoramagazine.org/building-smaller-container-images/) — Fedora Magazine, 16 May 2019. A Node.js image 170 MB smaller (47%), using fedora-minimal and microdnf, one-layer cleanup, an undocumented modularity file for microdnf, and a multi-stage Podman build of a static Go binary.
- [How does Atomic run system containers without Docker Daemon?](https://projectatomic.io/blog/2018/03/containers-w-skopeo-ostree-oci/) — Project Atomic blog, 5 March 2018. Pull with Skopeo, store with OSTree, run with an OCI runtime, so etcd and flanneld can start before any Docker daemon.
- [Make Firefox Quantum look native in Fedora 27](https://fedoramagazine.org/firefox-quantum-look-native-f27/) — Fedora Magazine, 2017.
- [New level of automation with Ansible](https://developers.redhat.com/blog/2017/06/07/new-level-of-automation-with-ansible) — Red Hat Developer, 7 June 2017. Why declarative, repeatable playbooks replace Bash scripts that break on the second run.

## Community

- **Stack Overflow reviewer.** Custodian, 15 years, about 1.6k reputation, 2.2 million people reached. [Network account](https://stackexchange.com/users/428152/muayyad-alsadi?tab=accounts). The public record is practical answers across Python, the web, containers and PHP.
- **Electrical Engineering.** A [Famous Question](https://stackexchange.com/users/428152/muayyad-alsadi?tab=accounts) gold badge (a question past 10,000 views) and two Notable Question badges, on AVR clocks and timers.
- **Server Fault.** The highest-reaching post off Stack Overflow is on making a Docker application write to stdout.
- Data Science and Software Engineering are on the same network account. Also Custodian twice, Citizen Patrol, Editor, Critic, Teacher, Scholar, Supporter.
- GitHub: [90 public repositories and 261 followers](https://github.com/muayyad-alsadi/), in ojuba-org and OpenSooq, Arctic Code Vault Contributor. [X / Twitter](https://twitter.com/muayyadalsadi/memberships). Open source since 2002. Arabic (native) and English.
- **Jordan Open Source Association.** With JOSA, the Jordan Open Source Association.
- **Arduino.** I was a mentor at an event where Massimo Banzi, who started Arduino, was a judge.

## Education

- **M.Sc. Computer Science, Excellent.** Princess Sumaya University for Technology, 2015–2018. Thesis on deep convolutional neural networks and knowledge transfer for image recognition, linked above.
- **B.Sc. Mathematics, Excellent.** The Hashemite University, 2000–2004.
- **Mirantis Certified OpenStack Administrator** (MCA100, credential 100-172) and Instructor (~2015).

## Range

- **Search and data.** Information retrieval, ranking, recommendation, machine learning, data engineering.
- **Systems.** Linux, containers, distributed systems, databases, networking, performance.
- **Low level.** Assembly and microcontrollers when the limit is the machine: a WebAssembly runtime, or a bare AVR.
- **Languages.** C and C++, Python, Node.js, PHP, Ruby, Java, and Go, plus JavaScript and SQL.

From super-powered clusters to the least-powered Arduino. From the web to the backend. From CSS to algorithms.

## Projects

Containers, search, Arabic, and the small machine that does not have the RAM.

- **[containerized-gui-wayland](https://github.com/muayyad-alsadi/containerized-gui-wayland)** — a full Linux desktop in one container: a Wayland compositor with wayvnc, reachable from a browser. Base image for packaging any GUI app the same way.
- **[containerized-xorg-spice](https://github.com/muayyad-alsadi/containerized-xorg-spice)** — the X11 predecessor: a remote X desktop in a container over SPICE, with an HTML5 client.
- **[docker-balancer](https://github.com/muayyad-alsadi/docker-balancer)** — a dynamic HAProxy load balancer driven by Docker events.
- **[docker-jumpshell](https://github.com/muayyad-alsadi/docker-jumpshell)** — a secure SSH jump box into Docker containers, with access control lists.
- **[UniVarUInts](https://github.com/muayyad-alsadi/univaruints)** — compact variable-length unsigned integers, tighter than Protocol Buffers’ VarInt. [C](https://github.com/muayyad-alsadi/univaruints), [Python](https://github.com/muayyad-alsadi/python-univaruints), [JavaScript](https://github.com/muayyad-alsadi/js-univaruints).
- **[othman](https://github.com/muayyad-alsadi/othman)** — a Quran browser and search, indexed with UniVarUInts. Also released on Flathub.
- **[avr_sound](https://github.com/muayyad-alsadi/avr_sound)** — compressed audio on a bare AVR or Arduino through two digital pins and an R-2R ladder. Audio lives in flash, about 2 KB per second, because the chip has too little RAM to hold it. Includes a Python converter from audio to C headers. Written up on Instructables (2014 – present).
- **[thawab](https://github.com/muayyad-alsadi/thawab)** — a Whoosh search engine for Arabic and Islamic literature.
- **[RtlCss](https://github.com/muayyad-alsadi/RtlCss)** — a right-to-left CSS override generator, used by Bootstrap RTL for v2 and v3.
- **[php-lite-solr](https://github.com/muayyad-alsadi/php-lite-solr)** — a lightweight Solr client and library for PHP.
- **[ajax-ops](https://github.com/muayyad-alsadi/ajax-ops)** — declarative AJAX operations with internationalization support.
- **[python-PooledProcessMixIn](https://github.com/muayyad-alsadi/python-PooledProcessMixIn)** — a fast concurrent mixin: a pool of pre-forked processes and threads for Python socket servers.
- **[yii-EClientScript](https://github.com/muayyad-alsadi/yii-EClientScript)** — minify and combine JavaScript and CSS for Yii.

## Consulting

2008–2010 and ~2015, I consulted, on my own and with a client’s team. Production cloud included almost all Amazon Web Services, and other vendors. Docker was made fit for production the same way: by joining the project and closing the gaps, instead of waiting for the product to grow up. I am a Mirantis Certified OpenStack administrator and instructor.

- Optimize a web stack: Apache, NGINX, Varnish, HAProxy, PHP, Ruby, Python, Node.js.
- Deploy and tune open-source applications, including WordPress and Magento.
- Scale an application: decouple components, load-balance work, replicate databases and files, adopt the cloud.
- Automate deployment and workflow with Fabric and Ansible, including dry runs and rolling deploys.
- Analyze a setup and its code and find the bottleneck.
- Analyze an Android application.
- Manage a team, or develop alone or inside one.
- Work across backends, web front ends, and Android.
- Set up, deploy and develop enterprise software: LDAP, FreeIPA, mail servers, ERP.
- Build real-time data applications, and design an algorithm for the specific case.
